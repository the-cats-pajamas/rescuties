import React from "react";
import PropTypes from "prop-types";

const Contact = ({
	onContactClick,
	onStarredClick,
	onDeleteClick,
	id,
	firstname,
	lastname,
	image,
	department,
	starred,
	active
}) => (
		<tr className={((active === id) ? "bg-light" : "")}>
			<td onClick={onContactClick} style={{ width: 70 + 'px' }}>
				<img src={image} className="rounded-circle" width="50" alt={image} />
			</td>
			<td onClick={onContactClick}>
				<p className="mb-0 text-truncate">
					{firstname} {lastname}
				</p>
				<p className="mb-0 text-muted">{department}</p>
			</td>
			<td className="text-center" style={{ width: 70 + 'px' }}>
				<i
					onClick={onStarredClick}
					className="fas fa-star"
					style={{ color: starred ? "#FFC107" : "#495057" }}
				></i>
				<i onClick={onDeleteClick} className="fas fa-trash-alt ml-3"></i>
			</td>
		</tr>
	);

Contact.propTypes = {
	firstname: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	department: PropTypes.string.isRequired,
	starred: PropTypes.bool.isRequired,
	onStarredClick: PropTypes.func.isRequired,
	onDeleteClick: PropTypes.func.isRequired,
	onContactClick: PropTypes.func.isRequired
};

export default Contact;
