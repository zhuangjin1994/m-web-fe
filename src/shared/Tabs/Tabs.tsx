import { defineComponent, PropType} from "vue";
import s from "./Tabs.module.scss";
export const Tabs = defineComponent({
    props: {
        selected: String as PropType<string>,
        onUpdateSelected:Function as PropType<(name:string)=>void>
    },
    setup(props, context) {
        return () => {
            const array = context.slots.default?.();
            if (!array) return null;
            for (let i = 0; i < array.length; i++) {
                if (array[i].type !== Tab) {
                    throw new Error(" <Tabs> only accepts <Tab> as children")
                }
            }
            return <div class={s.wrapper}>
                <ol>
                    <li>{
                        array.map(item =>
                            <li class={item.props?.name === props?.selected ? s.selected : ""}
                                onClick={()=>context.emit('update:selected',item.props?.name)} >
                                {item.props?.name}
                            </li>
                        )
                    }</li>
                </ol>
                <div></div>
            </div>
        }
    }
})

export const Tab = defineComponent({
    props: {
    name:String as PropType<string>
    },
    setup(props,context) {
        return () => (
            <div class={s.wrapper}>
                {context.slots.default?.()}
            </div>
        )
    }
})