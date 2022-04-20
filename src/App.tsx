import { defineComponent } from "vue";

export const App = defineComponent({
    setup() {
        return () => <>
            <header>导航</header>
            <main>内容</main>
            <footer>页脚</footer>
        </>
    }
})