import { defineComponent, PropType, reactive } from 'vue';
import { MainLayout } from '../../layout/MainLayout';
import { Icon } from '../../shared/Icon/Icon';
import { Rules, validate } from '../../shared/validate';
import { TagForm } from './TagForm';
export const TagCreate = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    const formData = reactive({
      name: '',
      sign: '',
    })
    const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
    return () => (
      <MainLayout>{{
        title: () => '新建标签',
        icon: () => <Icon name="left" onClick={() => { }} />,
        default: () => <>
          <TagForm />
        </>
      }}</MainLayout>
    )
  }
})