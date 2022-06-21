import { computed, defineComponent, PropType } from "vue";
import { EmojiSelect } from "../EmojiSelect/EmojiSelect";
import s from "./Form.module.scss";
export const Form = defineComponent({
    props: {
        onsubmit: {
            type: Function as PropType<(e: Event) => void>,
        }
    },
    setup(props, context) {
        return () => <>
            <div class={s.form} onSubmit={props.onSbumit}>
                {context.slots.default?.()}
            </div>
        </>
    }
})
export const FormItem = defineComponent({
    props: {
        label: {
            type: String
        },
        modelValue: {
            type: [String, Number]
        },
        type: {
            type: String as PropType<'text' | 'emojiSelect' | 'date'>,
        },
        error: {
            type: String
        }
    },
    setup(props, context) {
        const content = computed(() => {
            switch (props.type) {
                case 'text':
                    return <input type="text" class={s.text} value={props.modelValue} />
                case 'emojiSelect':
                    return <EmojiSelect
                        modelValue={props.modelValue?.toString()}
                        onUpdateModelValue={value => context.emit('update:modelValue', value)}
                        class={[s.formItem, s.emojiList, s.error]} />
                case 'date':
                    return <input />
                case undefined:
                    return context.slots.default?.()
            }
        })
        return () => <div class={s.fromRow}>
            <label class={s.formLable}>
                {
                    props.label && <span class={s.formItem_name}>{props.label}</span>
                }
                <div class={s.formItem_value}>
                    {content.value}
                </div>
            </label>
        </div>
    }
})