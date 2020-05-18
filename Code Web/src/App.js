import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@ui5/webcomponents-fiori/dist/ShellBar";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/ComboBox";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/Switch"
import "@ui5/webcomponents/dist/Panel";
import "@ui5/webcomponents/dist/TabContainer";
import "@ui5/webcomponents/dist/Tab"; 
import "@ui5/webcomponents/dist/TabSeparator";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents-fiori/dist/ProductSwitch.js";
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";
function App() {
  return (
    <div className="App">
      <header>
      <ui5-shellbar
primary-title="Орг.Структура"
secondary-title="( Презентация )"
logo="asset/img/sap.svg"
show-co-pilot
show-product-switch
show-notifications
notification-count="16"
>



	<ui5-avatar slot="profile" image="asset/img/iam.png"></ui5-avatar>

</ui5-shellbar>

      </header>
      

      <ui5-panel width="100%" accessible-role="Complementary"
       collapsed = "true"
	header-text="Подробно" class="full-width">
	<h1 class="content-color">Тестовая оргструктура магазина!</h1>
	<ui5-label wrap>
Добавьте нового сотрудника в список сотрудников магазина и  проверьте его отображение в графике кадровой структуры

  </ui5-label>


  <ui5-panel
  fixed accessible-role="Complementary"
 
	header-text="Оцените приложение"
	class="panel-width">
	<ui5-list id="myList2" mode="SingleSelectBegin" >
		<ui5-li key="star5">5</ui5-li>
		<ui5-li key="star4">4</ui5-li>
		<ui5-li key="star3">3</ui5-li>
		<ui5-li key="star3">2</ui5-li>
    <ui5-li key="star1">1</ui5-li>
	</ui5-list>
  <h1 class="content-color"> </h1>
  <ui5-button design="Positive">Оценить</ui5-button>
</ui5-panel>






</ui5-panel>

<ui5-tabcontainer class="full-width" collapsed fixed show-overflow>

	<ui5-tab text="Сотрудники" selected> </ui5-tab>
  <ui5-tab text="Добавить сотрудника" ></ui5-tab>
	<ui5-tab text="Орг.Структура" ></ui5-tab>
  <ui5-tab text="Редактор" ></ui5-tab>
	
  
</ui5-tabcontainer>


<ui5-panel
	fixed accessible-role="Complementary"
	header-text="Сотрудники"
	class="panel-width">


<ui5-button icon="away" aria-labelledby="lblAway">Обновить</ui5-button>
<span>&nbsp;&nbsp;&nbsp;</span>
<ui5-button icon="action-settings" aria-labelledby="lblSettings" >Добавить</ui5-button>
<span>&nbsp;&nbsp;&nbsp;</span>
<ui5-button icon="add" aria-labelledby="lblAdd">Экспорт</ui5-button>
<span>&nbsp;&nbsp;&nbsp;</span>
<ui5-button icon="alert" aria-labelledby="lblAlert">Печать</ui5-button>





</ui5-panel>



    </div>
  );
}

export default App;
