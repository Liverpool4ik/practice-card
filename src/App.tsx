import React from "react";
import { WrapperBox } from "./components/WrapperBox";
import { MainImage } from "./components/MainImage";
import { TextTitle } from "./components/Title";
import { CardText } from "./components/CardText";
import { CardButton } from "./components/CardButton";
// import './App.css';

function App() {
	return (
		<div className="App">
			<WrapperBox>
				<MainImage></MainImage>
				<TextTitle>Headline</TextTitle>
				<CardText>
					Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
					ornare in venen.
				</CardText>
				<CardButton></CardButton>
				<CardButton></CardButton>
			</WrapperBox>
		</div>
	);
}

export default App;
