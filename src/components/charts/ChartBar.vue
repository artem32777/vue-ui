<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart,
  type ChartData,
  type ChartOptions,
  type Color,
  LinearScale,
  Tooltip,
} from "chart.js"
import { Bar } from "vue-chartjs"
import { computed } from "vue"

Chart.register(Tooltip, BarElement, CategoryScale, LinearScale)

const { datasets } = defineProps<{
  datasets: {
    label: string
    backgroundColor?: Color
    data: {
      time: string
      value: number
    }[]
  }[]
}>()

const defaultColors: Color[] = ["#666BFF", "#2ABC95", "#FFD219", "pink", "black"]
const axeLabels: string[] = Array.from(
  { length: 24 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`,
)

const chartData = computed<ChartData<"bar", { x: string; y: number }[]>>(() => {
  return {
    labels: axeLabels,
    datasets: datasets.map((set, i) => ({
      label: set.label,
      data: set.data.map((e) => ({ x: e.time, y: e.value })),
      backgroundColor: set.backgroundColor || defaultColors[i],
      borderRadius: 5,
      categoryPercentage: 0.8,
    })),
  }
})

const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        color: "#F2F2FF",
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#C0C0CC",
        font: {
          size: 14,
          family: "Gilroy",
          weight: 500,
          lineHeight: 1.4,
        },
        padding: 8,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#C0C0CC",
        font: {
          size: 14,
          family: "Gilroy",
          weight: 500,
          lineHeight: 1.4,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
}

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart: any) {
    let ul = document.querySelector(".ocm-chart-legend")
    if (!ul) return
    while (ul.firstChild) {
      ul.firstChild.remove()
    }

    const items = chart.options.plugins.legend.labels.generateLabels(chart)

    items.forEach((item: any) => {
      const li = document.createElement("li")
      li.classList.add("ocm-chart-legend__item")
      li.onclick = () => {
        chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex))
        chart.update()
      }

      const boxSpan = document.createElement("i")
      boxSpan.style.background = !item.hidden ? item.fillStyle : ""
      boxSpan.classList.add("ocm-chart-legend__icon")

      const textContainer = document.createElement("p")
      textContainer.classList.add("ocm-chart-legend__text")
      textContainer.style.textDecoration = item.hidden ? "line-through" : ""

      const text = document.createTextNode(item.text)
      textContainer.appendChild(text)

      li.appendChild(boxSpan)
      li.appendChild(textContainer)
      ul.appendChild(li)
    })
  },
}
</script>

<template>
  <div class="ocm-chart-bar">
    <div>
      <ul class="ocm-chart-legend" />
      <div
        class="chart-container"
        style="position: relative; height: 529px; width: 100%">
        <Bar
          :data="chartData"
          :options="chartOptions"
          :plugins="[htmlLegendPlugin]" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
