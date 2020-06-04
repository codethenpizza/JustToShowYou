import React from "react";
import {inject, observer} from "mobx-react";

//interfaces
import {RootStore} from "../stores/rootStore";
import {IUser} from "../modules/user/types";
import {INews} from "../modules/news/types";

//components
import NewsList from '../components/News/NewsList'
import Calendar from "../components/Calendar/Calendar";


interface IDashboardProps {
  rootStore?: RootStore
}

const DashboardPage: React.FC<IDashboardProps> = inject('rootStore')(observer(({rootStore}) => {

  const user: IUser | null = rootStore!.userStore.user;
  const newsList: INews[] = rootStore!.newsStore.newsList;

  const getGreeting = (): string  => {
    const today: Date = new Date();
    const time = today.getHours();
    if (!time) return 'Hello';
    if (time < 12) return 'GoodMorning';
    if (time >= 18) return 'Good Evening';
    return 'Good day'
  };

  return (
    <>
      <h1>{getGreeting()}{user ? `, ${user.name}` : ''}!</h1>
      {newsList.length > 0 && <NewsList/>}
      {/* statistic */}
      <Calendar/>
    </>
  )
}));

export default DashboardPage