import { defineComponent, PropType} from "vue";
import s from "./ItemList.module.scss";
export const ItemList = defineComponent({
    props: {
    name:String as PropType<string>
    },
    setup(props,context) {
        return () => (
            <div class={s.wrapper}>itemlist</div>
        )
    }
})