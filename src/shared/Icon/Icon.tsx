import { defineComponent, PropType } from "vue";
import s from "./Icon.module.scss";
import { IconNameType } from "./IconNameType";
export type IconName = IconNameType;
export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<IconName>,
            required:true
        }
    },
    setup(props,context) {
        return () => (
            <svg class={s.icon}>
                <use xlinkHref={'#'+props.name}></use>
            </svg>
        )
    }
})