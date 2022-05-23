import { defineComponent, PropType} from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon/Icon";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
    props: {
    name:String as PropType<string>
    },
    setup(props,context) {
        return () => <>
            <MainLayout>
                {{
                    title:()=> "记一笔",
                    icon:()=> <Icon name="left" class={s.navIcon} />,
                    default: () => <>
                        <div>main</div>
                    </>
                }}
            </MainLayout>
        </>
    }
})