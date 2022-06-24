import { defineComponent, PropType, ref } from 'vue';
import { FormItem } from '../../shared/Form/Form';
import s from './Charts.module.scss';
export const Charts = defineComponent({
    props: {
        startDate: {
            type: String as PropType<string>,
            required: true
        },
        endDate: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup: (props, context) => {
        const categpry = ref('expenses')
        return () => (
            <div class={s.wrapper}>
                <FormItem type='select' options={[{ value: 'expenses', text: '支出' }, { value: 'income', text: '收入' }]} v-model={categpry.value} />
            </div>
        )
    }
})