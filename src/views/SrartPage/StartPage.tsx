import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { Button } from "../../shared/Button/Button";
import { Center } from "../../shared/Center/Center";
import { FloatButton } from "../../shared/FloatButton/FloatButton";
import { Icon } from "../../shared/Icon/Icon";
import { NavBar } from "../../shared/NavBar/NavBar";
import { Overlay } from "../../shared/Overlay/Overlay";
import  s  from "./StartPage.module.scss";
export const StartPage = defineComponent({
    setup(props, context) {
        const refOverlayVisible = ref(false);
        const onClickMenu = () => {
            refOverlayVisible.value = !refOverlayVisible.value
        }
        return () => (
            <div>
                <NavBar>
                    {{
                        default: () => '山竹记账',
                        icon: (_class: string) => <Icon class={_class} name="menu" onClick={ onClickMenu} />
                    }}
                </NavBar>
                <Center class={s.pig_wrapper}>
                    <Icon name="pig" class={s.pig} />
                </Center>
                <div class={s.button_wrapper}>
                    <RouterLink to="/items/create">
                        <Button class={s.button} >开始记账</Button>
                    </RouterLink>
                </div>
                <RouterLink to="/items/create">
                    <FloatButton iconName="add" />
                </RouterLink>
                { refOverlayVisible.value && <Overlay onClose={()=> refOverlayVisible.value = false } /> }
            </div>
        )
    }
})