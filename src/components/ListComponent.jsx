import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup } from "react-bootstrap";

const ListComponent = ({ userData, userRepos, username }) => {
  return (
    <div className="mt-4">
      {userData && (
        <Card>
          <Card.Body>
            <Card.Title>{username}</Card.Title>
            <Card.Text>
              <h1>{userData.name}</h1>
              <p>BIO: {userData.bio}</p>
              <p>LOCATION: {userData.location}</p>
              <img style={{ width: "200px" }} src={userData.avatar_url} alt="Profile Pic" />
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {userRepos.length > 0 && (
        <Card className="mt-4">
          <Card.Header>User Repositories for {username}</Card.Header>
          <ListGroup variant="flush">
            {userRepos.map((repo) => (
              <ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      )}
    </div>
  );
};

ListComponent.propTypes = {
  userData: PropTypes.object,
  userRepos: PropTypes.array,
  username: PropTypes.string.isRequired,
};

export default ListComponent;
