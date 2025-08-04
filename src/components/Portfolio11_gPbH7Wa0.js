import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Portfolio11_gPbH7Wa0.css";

const portfolios = [
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11_1.jpg",
		title: "Cerasa Redesign",
		details: "Leader in bathroom furniture since 1983.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11_2.jpg",
		title: "Project Lato",
		details: "The Next generation Management System.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11_3.jpg",
		title: "Project Lato",
		details: "A green oasis on the sea of the Cinque Terre.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11_4.jpg",
		title: "Project Sportland",
		details: "he Nature of Wellness.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11_5.jpg",
		title: "Cerasa Redesign",
		details: "Leader in bathroom furniture since 1983.",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11_6.jpg",
		title: "Project Lato",
		details: "The Next generation Management System.",
	},
];

const PortfolioItem = ({ item }) => (
	<div className="px-md-4">
		<a href="#!" className="text-decoration-none">
			<div className="ezy__portfolio11_gPbH7Wa0-project-image-wrapper">
				<img src={item.img} alt="Project Gallery" className="img-responsive" />
				<FontAwesomeIcon icon={faLink} />
			</div>
			<div className="ezy__portfolio11_gPbH7Wa0-project-content text-left">
				<h3 className="ezy__portfolio11_gPbH7Wa0-project-content-title">{item.title}</h3>
				<div className="ezy__portfolio11_gPbH7Wa0-project-content-details">
					<p>{item.details}</p>
				</div>
			</div>
		</a>
	</div>
);

PortfolioItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Portfolio11_gPbH7Wa0 = () => {
	return (
		<section className="ezy__portfolio11_gPbH7Wa0" id="ezy__portfolio11_gPbH7Wa0">
			<Container>
				<Row className="section-separator">
					{/* Start: Section Heading  */}
					<Col xs={12} className="text-center text-sm-start mb-4 mb-md-5">
						<h2 className="ezy__portfolio11_gPbH7Wa0-heading mb-0">Project Gallery</h2>
						<p className="ezy__portfolio11_gPbH7Wa0-sub-heading ms-sm-4">
							We design &amp; develop quality products.
						</p>
					</Col>
					{/* End: Section Heading  */}

					{/* Start: Project Gallery Area  */}
					<Col xs={12} className="project-gallery">
						<Row>
							{portfolios.map((item, i) => (
								<Col
									xs={12}
									md={6}
									className="ezy__portfolio11_gPbH7Wa0-project overflow"
									key={i}
								>
									<PortfolioItem item={item} />
								</Col>
							))}
						</Row>
					</Col>
					{/* End: Project Gallery Area  */}
				</Row>
			</Container>
		</section>
	);
};

export default Portfolio11_gPbH7Wa0;

