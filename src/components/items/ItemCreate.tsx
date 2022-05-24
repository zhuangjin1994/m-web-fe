import { defineComponent, PropType, ref} from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon/Icon";
import { Tab, Tabs } from "../../shared/Tabs/Tabs";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
    props: {
    name:String as PropType<string>
    },
    setup(props, context) {
        const refKind = ref('支出')
        return () => <>
            <MainLayout>
                {{
                    title:()=> "记一笔",
                    icon:()=> <Icon name="left" class={s.navIcon} />,
                    default: () => <>
                        {/* <Tabs selected={refKind.value} onUpdateSelected={name => refKind.value = name}> */}
                        <Tabs v-model:selected={refKind.value}>
                            <Tab name="支出">
                                支出列表
                            </Tab>
                            <Tab name="收入">
                                收入列表
                            </Tab>
                        </Tabs>
                    </>
                }}
            </MainLayout>
        </>
    }
})