import { defineComponent } from "vue";
import { Button } from "../../shared/Button/Button";
import  s  from "./StartPage.module.scss";
export const StartPage = defineComponent({
    setup(props, context) {
        const onClick = () => {
            console.log('111')
        }
        return () => (
            <div class={s.button_wrapper}>
                <Button class={s.button} onClick={onClick} >按钮</Button>
            </div>
        )
    }
})