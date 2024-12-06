<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  data: {
    name: string
    value: number
  }[]
}>()

const funnelElements = [
  '<svg width="410" height="96" viewBox="0 0 410 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M409.962 14.2469C407.872 21.9678 321.058 28.1325 201.204 27.9978C81.3626 27.8482 -2.0626 21.474 0.0388161 13.7531C2.12809 6.03223 88.9423 -0.132502 208.784 0.00216497C328.638 0.136831 412.051 6.51105 409.962 14.2319V14.2469Z" fill="#5F63EE" /><path d="M24.8702 84.1222C16.572 60.7825 8.28602 37.428 0 14.0883C2.61216 21.4316 84.2817 27.4064 201.197 27.5241C321.077 27.6565 407.898 21.6082 410 14L385.142 84.0339C383.295 90.7592 307.785 96.1158 201.647 95.9981C98.1201 95.8804 27.1786 90.5973 24.8702 84.0928V84.1222Z" fill="#666BFF" /></svg>',
  '<svg width="350" height="94" viewBox="0 0 350 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M349.347 14.2434C347.562 21.9642 273.59 28.1199 171.46 27.9982C69.3299 27.8591 -1.75207 21.4947 0.0328701 13.7566C1.81781 6.01841 75.7897 -0.119944 177.92 0.00177944C280.05 0.140892 351.132 6.5053 349.347 14.2434Z" fill="#7E81EA" /><path d="M24.8467 84.0058L0 14.0735C2.24665 20.3922 70.8362 25.5207 171.425 25.6236C274.565 25.7411 347.587 20.5392 349.384 14L324.537 83.9324C322.971 89.5899 261.267 94.1011 171.862 93.9983C84.6561 93.8954 26.8019 89.4576 24.8588 83.9911L24.8467 84.0058Z" fill="#8C90FF" />',
  '<svg width="289" height="92" viewBox="0 0 289 92" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M288.973 14.2387C287.504 21.9797 226.309 28.1227 141.834 27.9981C57.3595 27.8736 -1.44251 21.4816 0.0269322 13.7613C1.49638 6.02035 62.6908 -0.12266 147.166 0.00186003C231.64 0.147134 290.443 6.51842 288.973 14.2387Z" fill="#CE81EB" /><path d="M24.8295 83.8734C16.553 60.5969 8.27652 37.3351 0 14.0587C1.88103 19.3388 57.3895 23.6362 141.647 23.7242C228.029 23.8269 287.263 19.4708 288.768 14L263.938 83.8148C262.664 88.4055 214.765 92.0723 142.084 91.9989C71.1999 91.9256 26.4193 88.3175 24.8417 83.8734H24.8295Z" fill="#E08CFF" /></svg>',
  '<svg width="229" height="82" viewBox="0 0 229 82" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M228.129 12.2094C226.965 18.842 178.66 24.1085 111.966 23.9983C45.2719 23.8881 -1.14229 18.4233 0.0213968 11.7907C1.18509 5.15801 49.4903 -0.10848 116.184 0.00169763C182.878 0.111875 229.292 5.57669 228.129 12.2094Z" fill="#AA52FF" /><path d="M24.7895 76.2255C16.5263 54.8305 8.26315 33.4355 0 12.0405C1.51451 15.966 43.9086 19.1496 111.795 19.2171C181.39 19.2845 226.788 16.0605 228 12L203.211 76.1985C202.229 79.4496 168.135 82.0531 112.231 81.9992C57.6967 81.9452 26.0011 79.3821 24.7895 76.239V76.2255Z" fill="#B466FF" /></svg>',
  '<svg width="168" height="72" viewBox="0 0 168 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M167.984 7.11832C167.123 10.9897 131.549 14.0665 82.447 13.9989C33.3329 13.9313 -0.845516 10.7361 0.015921 6.88165C0.877358 3.02717 36.4511 -0.0665345 85.553 0.00108781C134.667 0.0687101 168.846 3.26385 167.984 7.11832Z" fill="#840EF3" /><path d="M24.839 68.1472C16.5634 47.7691 8.27562 27.4038 0 7.02569C1.15276 9.86347 30.5907 12.1748 82.3194 12.2262C135.359 12.2775 167.078 9.94051 168 7L143.161 68.1215C142.469 70.3044 122.072 72.0379 82.7562 71.9994C44.4117 71.9608 25.7005 70.253 24.839 68.1472Z" fill="#8F19FF" /></svg>',
]

const summary = computed(() => {
  return props.data.slice(1).map((item, index) => {
    const previousValue = props.data[index].value
    const percent = ((item.value / previousValue) * 100).toFixed(0) + "%"
    const formula = `(${item.value} / ${previousValue}) * 100`
    return { percent, formula }
  })
})
</script>

<template>
  <div class="ocm-chart-funnel">
    <div class="ocm-chart-funnel__wrapper">
      <div class="ocm-chart-funnel__funnel-wrapper">
        <div
          v-for="(item, i) in data"
          class="ocm-chart-funnel__item">
          <h2 class="ocm-h2 ocm-chart-funnel__name">
            <span>{{ item.name }}</span>
          </h2>
          <div class="ocm-chart-funnel__svg-wrapper">
            <div
              v-html="funnelElements[i]"
              class="ocm-chart-funnel__svg" />
            <span class="ocm-h1 ocm-chart-funnel__value">{{ item.value }}</span>
          </div>
        </div>
      </div>
      <ul class="ocm-chart-funnel-summary">
        <li
          v-for="item in summary"
          class="ocm-chart-funnel-summary__item">
          <div class="ocm-h1 ocm-chart-funnel-summary__percent">{{ item.percent }}</div>
          <span class="ocm-h4 ocm-chart-funnel-summary__formula">{{ item.formula }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ocm-chart-funnel {
  //padding-top: 13px;
  &__wrapper{
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 78px 0 43px 125px;
  }
  &__funnel-wrapper{
    flex: 1 1 auto;
    max-width: 795px;
  }
  &__item {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    &:nth-child(1){
      z-index: 10;
      color: #666BFF;
      .ocm-chart-funnel__name{
        transform: translate(0px, -12px);
      }
    }
    &:nth-child(2){
      z-index: 9;
      margin-top: -6px;
      color: #8C90FF;
      .ocm-chart-funnel__name{
        transform: translate(0px, -12px);
      }
    }
    &:nth-child(3){
      z-index: 8;
      margin-top: -6px;
      color: #E08CFF;
      .ocm-chart-funnel__name{
        transform: translate(0px, -9px);
      }
    }
    &:nth-child(4){
      z-index: 7;
      margin-top: -5px;
      color: #B466FF;
      .ocm-chart-funnel__name{
        transform: translate(0px, -6px);
      }
    }
    &:nth-child(5){
      z-index: 6;
      margin-top: -3px;
      color: #8F19FF;
      .ocm-chart-funnel__name{
        transform: translate(0px, -4px);
      }
    }
    &:nth-child(6){
      z-index: 5;
      margin-top: -2px;
      color: #8F19FF;
    }
  }
  &__name{
    align-self: end;
    flex:  1 1 auto;
    padding: 10px 16px;
    color: inherit;
    position: relative;
    span{
      color:grey;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 150%;
      height: 3px;
      z-index: 100;
      background-color: currentColor;
    }
  }
  &__svg-wrapper{
    position: relative;
  }
  &__svg{
    width: 410px;
    display: flex;
    justify-content: center;
  }
  &__value{
    position: absolute;
    width: 20px;
    display: flex;
    justify-content: center;
    top: 45%;
    left: 48%;
    color: white;
  }
}
// ===================================================== //
.ocm-chart-funnel-summary{
  padding-bottom: 10px;
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__item{
    position: relative;
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 16px 32px;
    width: 380px;

    &::before, &:after {
      content: '';
      position: absolute;
      height: 100%;
      background: lightgrey;
    }
    &::before {
      inset: 0;
      width: 100%;
      z-index: 1;
      transform: skew( -20deg );
    }
    &::after{
      width: 30px;
      right: -10px;
      top: 0;
    }
    &:nth-child(2){
      transform: translate(-30px, 0px);
    }
    &:nth-child(3){
      transform: translate(-60px, 0px);
    }
    &:nth-child(4){
      transform: translate(-90px, 0px);
    }
  }
  &__percent{
    position: relative;
    z-index: 2;
    color:blue;
    padding-left: 65px;
  }
  &__formula {
    position: relative;
    z-index: 2;
    line-height: 22px;
    color: grey;
  }
}
</style>