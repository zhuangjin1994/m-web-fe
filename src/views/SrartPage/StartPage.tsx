import { defineComponent } from "vue";
import { Button } from "../../shared/Button/Button";
import { Center } from "../../shared/Center/Center";
import { FloatButton } from "../../shared/FloatButton/FloatButton";
import { Icon } from "../../shared/Icon/Icon";
import { NavBar } from "../../shared/NavBar/NavBar";
import  s  from "./StartPage.module.scss";
export const StartPage = defineComponent({
    setup(props, context) {
        const onClick = () => {
            console.log('111')
        }
        return () => (
            <div>
                <NavBar>
                    {{
                        default: () => '山竹记账',
                        icon: (_class: string) => <Icon class={_class} name="menu" />
                    }}
                </NavBar>
                <Center class={s.pig_wrapper}>
                    <Icon name="pig" class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                    <Button class={s.button} onClick={onClick} >开始记账</Button>
                </div>
                <FloatButton iconName="add" />
            </div>
        )
    }
})