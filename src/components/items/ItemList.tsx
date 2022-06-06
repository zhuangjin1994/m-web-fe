import { defineComponent, PropType, ref} from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon/Icon";
import { Tab, Tabs } from "../../shared/Tabs/Tabs";
import s from "./ItemList.module.scss";
export const ItemList = defineComponent({
    props: {
    name:String as PropType<string>
    },
    setup(props, context) {
        const refSelected = ref('本月')
        return () => (
            <MainLayout>{
                {
                    title: () => '记账',
                    icon: () => <Icon name="menu" />,
                    default: () => (
                        <Tabs classPrefix={'customTabs'} v-model:selected={refSelected.value}>
                            <Tab name="本月">
                                1
                            </Tab>
                            <Tab name="上月">
                                2
                            </Tab>
                            <Tab name="今年月">
                                3
                            </Tab>
                            <Tab name="自定义时间">
                                4
                            </Tab>
                        </Tabs>
                    )
                }
            }</MainLayout>
        )
    }
})