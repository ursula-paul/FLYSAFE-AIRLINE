import React, { useEffect, useState } from "react";
import "./App.scss";
import SearchAllience from "./Componets/SearchAllience/SearchAllience.jsx";
import { NavBar } from "./Componets/NavBar/NavBar";
import fetchJsonp from "fetch-jsonp";

function App() {
	const [selectedAlliances, setSelectedAlliances] = useState([]);
	const [fetchedData, setFetchData] = useState([]);

	useEffect(() => {
		FetchDataFromApi();
	}, []);

	const FetchDataFromApi = async () => {
		const BaseUrl = `https://kayak.com/h/mobileapis/directory/airlines/homework`;
		try {
			let response = await fetchJsonp(BaseUrl, {
				jsonpCallback: "jsonp",
			});
			let data = await response.json();

			setFetchData(data);
		} catch (error) {
			console.log(error);
		}
	};

    const filteredAirlineInfos =
    selectedAlliances.length === 0
      ? fetchedData
      : fetchedData.filter((airlineInfo) => {
          return selectedAlliances.includes(airlineInfo.alliance);
        });

	const checkbox = (TypeofAlliance) => {
		return (checked) => {
			let checktempArr = [...selectedAlliances];
			if (checked) {
				checktempArr.push(TypeofAlliance);
			} else {
				checktempArr = checktempArr.filter((checkBox) => {
					return checkBox !== TypeofAlliance;
				});
			}
			setSelectedAlliances(checktempArr);
		};
	};
	return (
		<div className="App">
			<NavBar />
			<SearchAllience
				fetcheddata={filteredAirlineInfos}
				setOWChekBox={checkbox("OW")}
				setSTChekBox={checkbox("ST")}
				setSAChekBox={checkbox("SA")}
			/>
		</div>
	);
}

export default App;
