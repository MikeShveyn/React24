export default function Tabs({children, buttons, BtnsContainer = 'menu'}) {
    // MUST BE Capitalize name BtnsContainer
    return <>
        <BtnsContainer> {buttons} </BtnsContainer>
        {children}
    </>

}