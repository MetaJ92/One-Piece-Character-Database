import * as React from "react"
import { Link } from 'gatsby'
import "../components/OPStyle.css"

//Start of sort functions
const DataSortable = (OPDatas, option = null) => {
  const [sortOption, setSortOption] = React.useState(option);
  
  const sortedData = React.useMemo(() => {
    let sortedOPDatas = [...OPDatas];
    if(sortOption !== null){
      sortedOPDatas.sort((a,b) => {
        if (a[sortOption.key] < b[sortOption.key]) {
          return sortOption.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortOption.key] > b[sortOption.key]) {
          return sortOption.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedOPDatas;
  }, [OPDatas, sortOption]);

  const demandSort = key => {
    let direction = 'ascending';
    if (sortOption && sortOption.key === key && sortOption.direction === 'ascending') {
      direction = 'descending';
    }
    setSortOption({ key, direction });
  };
  return {OPDatas: sortedData, demandSort};
};

const OPTable = (props) => {
  const {OPDatas, demandSort, sortOption} = DataSortable(props.OPData);
  const getClassNamesFor = (name) => {
    if (!sortOption){
      return;
    }
    return sortOption.key === name ? sortOption.direction : undefined;
  };
  return (
    <div className="table table-sort">
    <div><img className="Logo" src="./Images/OPLogo.png" alt="One Piece" width="234px" height="83px"></img></div>
    <div><Link to="/search">Quiz Game!</Link></div>
    <div><h1>One Piece Character Database</h1></div>
    <table >
      
      <thead>
        <tr>
        <th onClick={() => demandSort('id')}
            className={getClassNamesFor('id')}>
            ID
          </th>
          <th onClick={() => demandSort('image')}
            className={getClassNamesFor('image')}>
            Image
          </th>
          <th onClick={() => demandSort('name')}
            className={getClassNamesFor('name')}>
            Name
          </th>
          <th onClick={() => demandSort('age')}
            className={getClassNamesFor('age')}>
            Age
          </th>
          <th onClick={() => demandSort('height')}
            className={getClassNamesFor('height')}>
            Height
          </th>
          <th onClick={() => demandSort('birth')}
            className={getClassNamesFor('birth')}>
            Birthday
          </th>
          <th onClick={() => demandSort('origin')}
            className={getClassNamesFor('origin')}>
            Origin
          </th>
          <th onClick={() => demandSort('blood')}
            className={getClassNamesFor('blood')}>
            Blood Type
          </th>
        </tr>
      </thead>
      <tbody>
        {OPDatas.map(OPData => {console.log(OPData); return (
          <tr key={OPData.id}>
            <td>{OPData.id}</td>
            <td><img src={OPData.image} width="100px" alt=""/></td>
            <td>{OPData.name}</td>
            <td>{OPData.age}</td>
            <td>{OPData.height}cm</td>
            <td>{OPData.birth}</td>
            <td>{OPData.origin}</td>
            <td>{OPData.blood}</td>
          </tr>
        )})}          
      </tbody>
    </table>
    </div>
  );
}

export const Head = () => <title>Graph Page</title>
  //Export default component 
  export default function IndexPage() {
    return (
      <div>
        <OPTable
        
          OPData={[
            {id:1,image:"./images/Luffy.png",name:"Luffy",age:19,height:174,birth:"05/05",origin:"East Blue",blood:"F"},

            {id:2,image:"./images/Zoro.png",name:"Zoro",age:21,height:178,birth:"11/11",origin:"East Blue",blood:"XF"},

            {id:3,image:"./images/Nami.jpg",name:"Nami",age:20,height:170,birth:"07/03",origin:"East Blue",blood:"X"},

            {id:4,image:"./images/Usopp.jpg",name:"Usopp",age:19,height:176,birth:"04/01",origin:"East Blue",blood:"S"},

            {id:5,image:"./images/Sanji.jpg",name:"Sanji",age:21,height:177,birth:"03/02",origin:"North Blue",blood:"S (RH-)"},

            {id:6,image:"./images/Chopper.png",name:"Chopper",age:17,height:90,birth:"12/24",origin:"Grand Line",blood:"X"},

            {id:7,image:"./images/Robin.jpg",name:"Robin",age:30,height:188,birth:"02/06",origin:"West Blue",blood:"S"},

            {id:8,image:"./images/Franky.jpg",name:"Franky",age:36,height:240,birth:"03/09",origin:"South Blue",blood:"XF"},

            {id:9,image:"./images/Brook.jpg",name:"Brook",age:90,height:277,birth:"04/03",origin:"West Blue",blood:"X"},

            {id:10,image:"./images/Jinbe.png",name:"Jinbe",age:46,height:301,birth:"04/02",origin:"Grand Line",blood:"F"},

            {id:11,image:"./images/Vivi.png",name:"Vivi",age:18,height:169,birth:"02/02",origin:"Grand Line",blood:"F"},

            {id:12,image:"./images/Sunny.jpg",name:"Thousand Sunny",age:2,height:5600,birth:"03/25",origin:"Grand Line",blood:"N/A"},

            {id:13,image:"./images/merry.jpg",name:"Going Merry",age:22,height:1100,birth:"01/22",origin:"East Blue",blood:"N/A"},

            {id:14,image:"./images/Mihawk.png",name:"Mihawk",age:43,height:198,birth:"03/09",origin:"N/A",blood:"S"},
            
            {id:15,image:"./images/Crocodile.jpg",name:"Crocodile",age:46,height:253,birth:"09/05",origin:"Grand Line",blood:"S"},

            {id:16,image:"./images/Kuma.jpg",name:"Kuma",age:47,height:689,birth:"02/09",origin:"South Blue",blood:"X"},

            {id:17,image:"./images/Doflamingo.png",name:"Doflamingo",age:41,height:305,birth:"10/23",origin:"Red Line",blood:"X"},

            {id:18,image:"./images/Moria.png",name:"Moria",age:50,height:692,birth:"09/06",origin:"West Blue",blood:"X"},

            {id:19,image:"./images/Boa.jpg",name:"Boa",age:31,height:191,birth:"09/02",origin:"Calm Belt",blood:"S"},

            {id:20,image:"./images/Koby.png",name:"Koby",age:18,height:167,birth:"05/13",origin:"East Blue",blood:"F"},

            {id:21,image:"./images/Smoker.jpg",name:"Smoker",age:36,height:209,birth:"03/14",origin:"Grand Line",blood:"XF"},

            {id:22,image:"./images/Tashigi.jpg",name:"Tashigi",age:23,height:170,birth:"10/06",origin:"East Blue",blood:"S"},

            {id:23,image:"./images/Aokiji.jpg",name:"Kuzan",age:49,height:298,birth:"09/21",origin:"South Blue",blood:"F"},

            {id:24,image:"./images/Kizaru.png",name:"Borsalino",age:58,height:302,birth:"11/23",origin:"North Blue",blood:"XF"},

            {id:25,image:"./images/Akainu.jpg",name:"Sakazuki",age:55,height:306,birth:"08/16",origin:"North Blue",blood:"F"},

            {id:26,image:"./images/Fujitora.jpg",name:"Issho",age:54,height:270,birth:"08/10",origin:"Grand Line",blood:"S"},

            {id:27,image:"./images/Ace.jpg",name:"Ace",age:20,height:185,birth:"01/01",origin:"South Blue",blood:"S"},

            {id:28,image:"./images/BigMom.JPG",name:"Linlin",age:68,height:880,birth:"02/15",origin:"Grand Line",blood:"X"},

            {id:29,image:"./images/Kaido.jpg",name:"Kaido",age:59,height:710,birth:"05/01",origin:"Grand Line",blood:"F"},

            {id:30,image:"./images/Shanks.jpg",name:"Shanks",age:39,height:199,birth:"03/09",origin:"West Blue",blood:"XF"},

            {id:31,image:"./images/Teach.JPG",name:"Teach",age:40,height:344,birth:"08/03",origin:"Grand Line",blood:"F"},

            {id:32,image:"./images/whitebeard.png",name:"Edward",age:72,height:666,birth:"04/06",origin:"Grand Line",blood:"F"},

            {id:33,image:"./images/Buggy.JPG",name:"Buggy",age:39,height:192,birth:"08/08",origin:"Grand Line",blood:"F"},
          ]}
        />
      </div>
    );
  }