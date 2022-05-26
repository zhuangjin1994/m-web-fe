import { defineComponent, PropType} from "vue";
import { MainLayout } from "../../layout/MainLayout";
import { Icon } from "../../shared/Icon/Icon";
import s from "./TagCreate.module.scss";
export const TagCreate = defineComponent({
    props: {
        name:{
            type: String as PropType<string>
        }
    },
    setup(props,context) {
        return () => <>
            <MainLayout>
                {{
                    title: () => '新建标签',
                    icon: () => <Icon name="left" class={s.navIcon} onClick={() => { }} />,
                    default: () => (
                        <form>
                            <div>
                                <label>
                                    <span>标签</span>
                                    <input />
                                </label>
                            </div>
                            <label>
                                <span>符号</span>
                                <div>
                                    <nav>
                                        <span>表情</span>
                                        <span>手势</span>
                                        <span>职业</span>
                                        <span>衣服</span>
                                        <span>动物</span>
                                        <span>自然</span>
                                        <span>食物</span>
                                        <span>运动</span>
                                    </nav>
                                    <ol>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                    </ol>
                                </div>
                            </label>
                            <button>确定</button>
                        </form>
                    )
                }}
            </MainLayout>
        </>
    }
})