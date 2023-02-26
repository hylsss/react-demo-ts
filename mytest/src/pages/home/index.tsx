import homeData from "./hock";
import Child from "./../../components/child/index";

export interface itemState {
  name: string;
  age: number;
}

export interface arrState {
  list: itemState[];
}
const { list } = homeData();
const Home = (props: arrState) => {
  return (
    <div>
      <Child list={list} />
    </div>
  );
};

export default Home;
