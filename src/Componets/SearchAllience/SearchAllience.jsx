import React from "react";
import "./SearchAllience.scss";

const SearchAllience = ({
	fetcheddata,
	setOWChekBox,
	setSTChekBox,
	setSAChekBox,
}) => {
	console.log(fetcheddata);

	const changeBoxState = (setCheckBox, e) => {
		setCheckBox(e.target.checked);
	};

	return (
		<div>
			<div className="container">
				<h3 className="main-title set-margin">Airlines</h3>
				<h5 className="main-subtitle set-margin">Fillter by Alliances</h5>

				<div className="allience-search">
					<div className="check-search">
						<input
							type="checkbox"
							name="One Word"
							value="One Word"
							className="item"
							onChange={(e) => changeBoxState(setOWChekBox, e)}
						/>
						<label htmlFor="One Word"> Oneworld</label>
					</div>

					<div className="check-search">
						<input
							type="checkbox"
							value="Sky Team"
							className="item"
							onChange={(e) => changeBoxState(setSTChekBox, e)}
						/>
						<label htmlFor="Sky Team"> Sky Team</label>
					</div>

					<div className="check-search">
						<input
							type="checkbox"
							name=" Star Alliance"
							value=" Star Alliance"
							className="item"
							onChange={(e) => changeBoxState(setSAChekBox, e)}
						/>
						<label htmlFor=" Star Alliance"> Star Alliance </label>
					</div>
				</div>

				<br />
				<div className="container__airline">
					{fetcheddata.map(({ logoURL, name, phone, site }, index) => (
						<div className="airline" key={index}>
							<div className="airline__content">
								<img
									src={"https://www.kayak.com" + logoURL}
									alt="airline logo"
								/>
								<div className="text">
									<p>{name}</p>
									<ul className="extra">
										<li>{phone}</li>
										<a
											className="anchor"
											href={site}
											target="_blank"
											rel="noopener noreferrer"
										>
											{site
												.replace(/[https://|https://www.|http://www.]*/, "")
												.substring(0, 21)}
										</a>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchAllience;
