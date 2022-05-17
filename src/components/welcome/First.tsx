import s from './welcome.module.scss';
import { FunctionalComponent } from 'vue';
import { Icon } from '../../shared/Icon/Icon';
export const First: FunctionalComponent = () => {
    return <div class={s.card}>
        <Icon name='pig' />
        <h2>学会赚钱<br />还要学会省钱</h2>
    </div>
}
First.displayName = 'First'