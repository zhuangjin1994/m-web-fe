import { defineComponent, PropType} from "vue";
import { TimeTabsLayout } from "../../layout/TimeTabsLayout";
import { ItemSummary } from "./ItemSummary";
export const ItemList = defineComponent({
    props: {
        name:String as PropType<string>
    },
    setup(props, context) {
        return () => (
            <TimeTabsLayout component={ItemSummary}/>
        )
    }
})