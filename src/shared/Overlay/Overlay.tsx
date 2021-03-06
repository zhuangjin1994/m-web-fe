import { defineComponent, PropType, ref} from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "../Icon/Icon";
import s from "./Overlay.module.scss";
export const Overlay = defineComponent({
    props: {
        onClose:Function as PropType<()=>void>
    },
    setup(props, context) {
        const onClose = () => {
            props.onClose?.();
        }
        const onClickSignIn = () => { }
        return () => <>
            <div class={s.mask} onClick={onClose}></div>
            <div class={s.overlay}>
                <section  class={s.currentUser} onClick={onClickSignIn}>
                    <h2>未登录</h2>
                    <p>点击这里登录</p>
                </section>
                <nav>
                    <ul class={s.action_list}>
                        <li>
                            <RouterLink to="/statistics" class={s.action}>
                                <Icon name="charts" class={s.icon} />
                                <span>统计图表</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/export" class={s.action}>
                                <Icon name="export" class={s.icon} />
                                <span>导出数据</span>
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/notify" class={s.action}>
                                <Icon name="notify" class={s.icon} />
                                <span>记账提醒</span>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    }
})

export const OverlayIcon = defineComponent({
    setup: () => {
        const refOverlayVisibility = ref(false);
        const onClickmenu = () => {
            refOverlayVisibility.value = !refOverlayVisibility.value;
        }
        return () => <>
            <Icon name="menu" class={s.icon} onClick={onClickmenu} />
            {refOverlayVisibility.value && <Overlay onClose={()=> refOverlayVisibility.value = false} />}
        </>
    }
})