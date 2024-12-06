<script setup lang="ts">
import {
  ArcElement,
  Chart,
  type ChartData,
  type ChartOptions,
  type Color,
  Legend,
  Title,
  Tooltip,
} from "chart.js"
import { Doughnut } from "vue-chartjs"
import { computed } from "vue"

Chart.register(ArcElement, Tooltip, Legend, Title)

const props = defineProps<{
  data: {
    name: string
    value: number
  }[]
}>()

const totalPercentage = computed<string>(
  () => `${props.data.map((item) => item.value).reduce((acc, item) => acc + item)}%`,
)

const backgroundColors: Array<Color> = [
  "#2A2B36",
  "#666BFF",
  "#FFD219",
  "#28BD96",
  "#8F19FF",
  "black",
]

const chartData = computed<ChartData<"doughnut">>(() => {
  return {
    labels: props.data.map((item) => item.name),
    datasets: [
      {
        backgroundColor: backgroundColors,
        data: props.data.map((item) => item.value),
        borderRadius: 10,
      },
    ],
  }
})

const chartOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  cutout: 55,
  animation: {
    animateRotate: true,
    animateScale: true,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 20,
  },
}

const chartLegendPlugin = {
  id: "customLegend",
  beforeDraw(chart: any) {
    const { ctx, chartArea } = chart
    const centerX = (chartArea.left + chartArea.right) / 2
    const centerY = (chartArea.top + chartArea.bottom) / 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, 110, 0, 2 * Math.PI)
    ctx.fillStyle = "#FBFBFF"
    ctx.fill()
    ctx.lineWidth = 1
    ctx.strokeStyle = "#F2F3FF"
    ctx.stroke()
  },
  afterDraw(chart: any) {
    const { ctx, chartArea, _metasets } = chart
    const meta = _metasets[0]
    const centerX = (chartArea.left + chartArea.right) / 2
    const centerY = (chartArea.top + chartArea.bottom) / 2
    const radius = meta.data[0].outerRadius

    ctx.save()

    ctx.font = "500 24px Arial"
    ctx.fillStyle = "#1D1D1F"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(totalPercentage.value, centerX, centerY)

    meta.data.forEach((arc: any, index: number) => {
      const percentage: number = chart.data.datasets[0].data[index]

      if (percentage === 0) return

      const angle = (arc.startAngle + arc.endAngle) / 2
      const labelX = centerX + Math.cos(angle) * (radius - 0)
      const labelY = centerY + Math.sin(angle) * (radius - 0)

      ctx.shadowColor = "rgba(62, 62, 62, 0.10)"
      ctx.shadowBlur = 10.986
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 3.662

      ctx.fillStyle = "#fff"
      ctx.beginPath()
      ctx.arc(labelX, labelY, 25, 0, 2 * Math.PI)
      ctx.fill()

      ctx.font = "600 16px Arial"
      ctx.fillStyle = "#1D1D1F"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${percentage}%`, labelX, labelY)
    })

    ctx.restore()
  },
}
</script>

<template>
  <div class="chart-doughnut">
    <div class="mb-16 flex items-center gap-24">
      <div style="position: relative; height: 238px; width: 238px">
        <Doughnut
          :options="chartOptions"
          :data="chartData"
          :plugins="[chartLegendPlugin]" />
      </div>
      <ul class="ocm-chart-doughnut__legend">
        <li
          v-for="(item, index) in chartData.labels"
          class="ocm-chart-doughnut__legend-item">
          <i
            class="ocm-chart-doughnut__legend-icon"
            :style="`background: ${backgroundColors[index]}`" />
          <span class="ocm-h4 ocm-h-fw500">
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chart-doughnut {
}
</style>
