import Section from "./section";
import * as constants from '../../constants/section';

export default function AllSection() {
    return(
        <div>
            <Section header={constants.FIRST_SECTION_HEADER} desc={constants.FIRST_SECTION_DESC} alignment={true}/>
            <Section header={constants.SECOND_SECTION_HEADER} desc={constants.SECOND_SECTION_DESC} alignment={false}/>
            <Section header={constants.THIRD_SECTION_HEADER} desc={constants.THIRD_SECTION_DESC} alignment={true}/>
        </div>
    );
}