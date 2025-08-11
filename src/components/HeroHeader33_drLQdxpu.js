import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroHeader33_drLQdxpu.css";
import bgimage from "./IMG-20250806-WA0068.jpg";

const logos = [
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-cnn-logo.png",
		alt: "",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-google-logo.png",
		alt: "",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-amazon-logo.png",
		alt: "",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-google-logo.png",
		alt: "",
	},
	{
		src: "https://cdn.easyfrontend.com/pictures/logos/white-fedex-logo.png",
		alt: "",
	},
];

const Logos = () => {
	return logos.map((logo, i) => (
		<img
			src={logo.src}
			alt={logo.alt}
			className="ezy__header33_drLQdxpu-img img-fluid pe-5 mt-4"
			key={i}
		/>
	));
};

const HeroHeader33_drLQdxpu = () => {
	return (
		<section
			className="ezy__header33_drLQdxpu"
			style={{
				backgroundImage:
					// "url(IMG-20250806-WA0068.jpg)",
					`url(${bgimage})`,
			}}
		>
			<div className="ezy__header33_drLQdxpu-overlay" />
			<Container>
				<Row>
					<Col xs={12} md={9} lg={7} style={{ margin: "auto" }}>
						<h2 className="ezy__header33_drLQdxpu-heading mb-4">WELCOME TO MCA 2024</h2>
						{/* <Row>
							<Col xs={12} md={7} lg={8}>
								<p className="ezy__header33_drLQdxpu-sub-heading mb-5" style={{ margin: "auto" }}>
									Welcome to a community of growth, where teaching is a journey we take together — exploring, discovering, and achieving side by side.
								</p>
							</Col>
						</Row> */}
						<Row>
							<Col xs={12} md={10} lg={6}>
								{/* <Button
									variant=""
									className="ezy__header33_drLQdxpu-btn rounded-pill w-100"
								>
									Know More about us
								</Button> */}
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="ezy__header33_drLQdxpu-logos">
					<Col xs={12}>
						<div className="d-flex flex-wrap align-items-center justify-content-center mt-5">
							<Logos />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroHeader33_drLQdxpu;

