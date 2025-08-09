import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Numbers2_ODupEDwA.css";

const cards = [
	{
		count: "33",
		title: "Total Students",
		detail:
			"We are Currently guiding 33 students towards academic excellence.",
	},
	{
		count: "5",
		title: "Teachers",
		detail:
			"Shaping curious minds for a brighter tomorrow.",
	},
	{
		count: "31+",
		title: "Papers",
		detail: "Drowning in papers but at least I’m literate.",
	},
	{
		count: "1600+",
		title: "Hours",
		detail:
			"Viverra tellus in hac habitasse platea dictumst tempor id eu nisl.",
	},
];

const CardItem = ({ item }) => (
	<Card className="border-0 mb-3">
		<Card.Body>
			<h3 className="mb-3">{item.count}</h3>
			<h5>{item.title}</h5>
			<p className="mb-0">{item.detail}</p>
		</Card.Body>
	</Card>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Cards = () => {
	const divider = Math.ceil(cards.length / 2);

	return (
		<>
			<div className="d-flex flex-column flex-sm-row">
				{cards.slice(0, divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>

			<div className="d-flex flex-column flex-sm-row">
				{cards.slice(divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>
		</>
	);
};

const Numbers2_ODupEDwA = () => {
	return (
		<section className="ezy__numbers2_ODupEDwA">
			<Container>
				{/* heading  */}
				<Row className="justify-content-between">
					<Col xs={12} lg={6}>
						<div className="ezy__numbers2_ODupEDwA-contents-wrapper">
							<h1 className="ezy__numbers2_ODupEDwA-heading mb-3">
								Our Numbers
							</h1>
							<p className="ezy__numbers2_ODupEDwA-sub-heading mb-5">
								Lets take a look at some of the numbers that defines our students, faculties and
								our college.
							</p>
						</div>

						{/* cards  */}
						<Cards />
					</Col>
					<Col
						xs={12}
						lg={5}
						className="d-flex justify-content-center align-items-end"
					>
						<img
							src="https://cdn.easyfrontend.com/pictures/numbers2.jpg"
							alt=""
							className="img-fluid mt-5 mt-md-0"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Numbers2_ODupEDwA;

