import s from './welcome.module.scss';
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
    return <div class={s.card}>
        <svg>
            <use xlinkHref='#pig'></use>
        </svg>
        <h2>学会赚钱<br />还要学会省钱</h2>,
    </div>
}
First.displayName = 'First'