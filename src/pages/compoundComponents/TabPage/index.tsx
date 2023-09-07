import { useState } from "react";
import Tab from "../../../components/tabs";
import { Container } from "./TabPage.style";

interface TabElement {
  label: string;
  value: string;
  isActive: boolean;
};

const initTabList: TabElement[] = [{
  label: '첫번째',
  value: 'first',
  isActive: false,
}, {
  label: '두번째',
  value: 'second',
  isActive: false,
}, {
  label: '세번째',
  value: 'third',
  isActive: false,
}]

const TabPage = () => {
  const [tabList, setTabList] = useState<TabElement[]>(initTabList);
  
  const handleTabActive = (value: string) => {
    const activedTab = tabList.map((tab) => {
      if (tab.value === value) {
        tab.isActive = true;
        return tab;
      }
      tab.isActive = false;
      return tab;
    });
    setTabList(activedTab);
  };

  return (
    <Container>
      <Tab>
        <Tab.List>
          {
            tabList.map((tab) => 
            <Tab.Item 
              onClick={() => handleTabActive(tab.value)} 
              key={tab.value} 
              isActive={tab.isActive}>{
              tab.label
            }</Tab.Item>)
          }
        </Tab.List>
      </Tab>
    </Container>
  );
};

export default TabPage;