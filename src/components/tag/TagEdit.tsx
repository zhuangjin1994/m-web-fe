import { defineComponent, PropType, reactive} from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Button } from "../../shared/Button/Button";
import { EmojiSelect } from "../../shared/EmojiSelect/EmojiSelect";
import { Icon } from "../../shared/Icon/Icon";
import { Rules, validate } from "../../shared/validate";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
export const TagEdit = defineComponent({
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
                    <div class={s.actions}>
                        <Button level="danger" class={s.removeTags}>删除</Button>
                        <Button level="danger" class={s.removeTagsAndItems}>删除标签</Button>
                    </div>
                </>
            }}</MainLayout>
        )
      }
})