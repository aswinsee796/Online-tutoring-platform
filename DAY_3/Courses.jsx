import React from 'react';
import Avatar from '@mui/material/Avatar';

const Course = () => {
return (
<div>
    
  <ul>
  <li><a class="active" href="/profile">profile</a></li>
  <li><a href="/sessions">Sessions</a></li>
  <li><a href="/materials">Materials</a></li>
  <li><a href="/blogs">About</a></li>
  <li><a href="/certification">Certification</a></li>
  <li><a href="/course">Courses</a></li>
  <li><a href="/logout">Logout</a></li>
  <div className="doubt">
  <li>
  <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 47, height: 47 }}
      />
  </li>
  </div>
</ul>
	<h1>Course page.</h1>
	</div>
);
};

export default Course;
