import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./HeroHeader33_drLQdxpu.css";

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
					"url(https://cdn.easyfrontend.com/pictures/hero/header33-bg.jpg)",
			}}
		>
			<div className="ezy__header33_drLQdxpu-overlay" />
			<Container>
				<Row>
					<Col xs={12} md={9} lg={7}>
						<h2 className="ezy__header33_drLQdxpu-heading mb-4">The Desert is my DNA</h2>
						<Row>
							<Col xs={12} md={7} lg={8}>
								<p className="ezy__header33_drLQdxpu-sub-heading mb-5">
									An activity that requires a person's mental or physical effort
									is work.If a person is trained for a certain type of job, they
									may have a job or profession which suits.
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={10} lg={6}>
								<Button
									variant=""
									className="ezy__header33_drLQdxpu-btn rounded-pill w-100"
								>
									Know More about us
								</Button>
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

