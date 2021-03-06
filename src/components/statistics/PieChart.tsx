import s from "./PieChart.module.scss";
import * as echarts from 'echarts';
import { defineComponent, onMounted, PropType, ref } from "vue";
export const PieChart = defineComponent({
    props: {
        name: {
            type: String as PropType<string>
        }
    },
    setup(props, context) {
        const refDiv = ref<HTMLElement>();
        onMounted(() => {
            if (refDiv.value === undefined) { return }
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(refDiv.value);
            // 绘制图表
            const option = {
                grid: [
                    { left: 0, top: 0, right: 0, bottom: 20 }
                ],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        })
        return () => (
            <div ref={refDiv} class={s.wrapper}></div>
        )
    }
})
