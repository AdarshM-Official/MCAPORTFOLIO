import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Testimonial4_cu3wTvmq.css";
import saranyamiss from "./saranyamiss.jpg";
import renjinimiss from "./renjinimiss.jpg";
import harisir from "./harisir.jpg";

const testimonialList = [
	{
		author: {
			fullName: "Saranya Miss",
			picture: saranyamiss,
			designation: "Associate Professor",
		},
		rating: 3.5,
		description:
			"It has been a privilege to teach the MCA batch of 2024–2026. Throughout the course, this class has shown remarkable enthusiasm for learning, adaptability to challenges, and a collaborative spirit that has set them apart. Each member brought their unique strengths, yet worked together to achieve common goals, reflecting true teamwork and professionalism. I am confident that this talented group will carry forward the values of dedication, curiosity, and integrity into their careers, making meaningful contributions to the industry and society.",
	},
	{
		author: {
			fullName: "Renjini Miss",
			picture: renjinimiss,
			designation: "Associate Professor",
		},
		rating: 4,
		description:
			"The MCA 2024–2026 batch has been one of the most vibrant and inspiring groups I have had the pleasure to guide. Their eagerness to embrace new technologies, willingness to ask thought-provoking questions, and ability to translate theory into practical solutions have been truly impressive. This class has shown resilience in the face of challenges and creativity in every project they undertook. I am certain that each of them will step into the professional world with confidence, ready to make a positive impact wherever they go.",
	},
	{
		author: {
			fullName: "Hari Sir",
			picture: harisir,
			designation: "Head of Department",
		},
		rating: 5,
		description:"Teaching the MCA 2024–2026 batch has been an enriching experience. This group has stood out for their determination to learn, their collaborative mindset, and their ability to approach problems with both logic and creativity. They have shown maturity in handling academic challenges and enthusiasm in exploring emerging trends in technology. I have no doubt that their strong foundation and passion for growth will help them excel in every endeavor they pursue"
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-3 ezy__testimonial4_cu3wTvmq-rating", className)}
		{...rest}
	>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = <FontAwesomeIcon icon={faStar} className="me-1 active" />;
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="me-1 active" />
					);
				else if (index > rating)
					content = <FontAwesomeIcon icon={faStar} className="me-1" />;

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial, index }) => (
	<Row className="align-items-center justify-content-between mt-5">
		<Col md={5} className={classNames({ "order-lg-2": index % 2 })}>
			<img
				src={testimonial.author.picture}
				alt={testimonial.author.fullName}
				className="img-fluid w-100 rounded-3"
			/>
		</Col>
		<Col md={6} className="ezy__testimonial4_cu3wTvmq-content mt-3 mt-md-0">
			<h4 className="mb-1">{testimonial.author.fullName}</h4>
			<p className="mb-1">{testimonial.author.designation}</p>
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="opacity-50 mb-0">{testimonial.description}</p>
		</Col>
	</Row>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
};

const Testimonial4_cu3wTvmq = () => {
	return (
		<section className="ezy__testimonial4_cu3wTvmq">
			<Container>
				<Row className="justify-content-center mb-4 mb-md-5">
					<Col lg={6} xl={5} className="text-center">
						<h2 className="ezy__testimonial4_cu3wTvmq-heading mb-3">
							Our Faculty Testimonials
						</h2>
						<p className="ezy__testimonial4_cu3wTvmq-sub-heading mb-0">
							Here's what our faculty members have to say about their experience with us.
						</p>
					</Col>
				</Row>

				{testimonialList.map((testimonial, i) => (
					<TestimonialItem testimonial={testimonial} index={i} key={i} />
				))}
			</Container>
		</section>
	);
};

export default Testimonial4_cu3wTvmq;

