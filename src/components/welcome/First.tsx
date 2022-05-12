import s from './welcome.module.scss';
import pig from '../../assets/icons/pig.svg'
import { FunctionalComponent } from 'vue';
export const First: FunctionalComponent = () => {
    return <div class={s.card}>
        <img src={pig} />
        <h2>学会赚钱<br />还要学会省钱</h2>,
    </div>
}
First.displayName = 'First'