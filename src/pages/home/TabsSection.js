import React, { useState } from 'react'
import TabElement from '../../components/TabElement'
import { faChartColumn, faArrowUpFromBracket, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TabSwitcher from '../../components/TabSwitcher';

const TabsSection = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  const handleTab = (activate, desactivate, descativate2) => {
    activate(true);
    desactivate(false);
    descativate2(false);
  };

  return (
    <section className={'tabs-section'} id='section-tabs'>
      <div className='tab-container'>
      <h5 className='services-title'>OUR SERVICES</h5>
        <ul className='tabs'>
          <TabSwitcher onClick={() => handleTab(setTab1, setTab2, setTab3)} border='#42d457' title='Instant Transfer' color='#a5ff8a'  icon={faArrowUpFromBracket} active={tab1 ? 'tab-active' : ''}/>
          <TabSwitcher onClick={() => handleTab(setTab2, setTab1, setTab3)} border='#3730ff' title='Currency Exchange' color='#8ca7ff' icon={faArrowRightArrowLeft} active={tab2 ? 'tab-active' : ''}/>
          <TabSwitcher onClick={() => handleTab(setTab3, setTab1, setTab2)} border ='#ffb030' title='Manage Finances' color='#ffeeb5' icon={faChartColumn} active={tab3 ? 'tab-active' : ''}/>
        </ul>
        {tab1 && <TabElement title='Tranfer money to anyone in just seconds. With no fees!' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>}
        {tab2 && <TabElement title='Be always updated of the current currency rates worldwide.' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>}
        {tab3 && <TabElement title='Keep track of all expenses you make during the month.' text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>}
      </div>
    </section>
  )
}

export default TabsSection
