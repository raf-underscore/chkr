import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import styled from '@emotion/styled'

const TaskInformation = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 0 15px;
	min-height: 106px;
	border-radius: 5px;
	max-width: 311px;
	/* background: ${({isDragging}) => (isDragging ? 'rgba(255, 59, 59, 0.15)' : 'white')}; */
	background: grey;
	margin-top: 15px;
	.secondary-details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-size: 12px;
		font-weight: 400px;
		color: #7d7d7d;
	}
`

const TaskCard = ({item, index}) => {
	return (
		// The Draggable component provided by react-beautiful-dnd is required to have 2 mandatory props the draggableId and the index.
		<Draggable key={item.id} draggableId={item.id} index={index}>
			{(provided) => (
				// Like the Droppable, the Draggable also requires its child to be a function and again we have to take the render props pattern here.
				// The first argument is again called provided and just like the Droppable we have similar properties attached here along with something called dragHandleProps.
				// The dragHandleprops are needed to be applied to the part of the component that we want to use to be able to control the entire component.
				// We want the entire card to be controlled so we provide these props to the parent div itself.

				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<TaskInformation>
						<p>{item.body}</p>
						<div className='secondary-details'></div>
					</TaskInformation>
				</div>
			)}
		</Draggable>
	)
}

export default TaskCard

// <span className="priority">
// {item.Priority === 'High' ? (<RedArrow />) : item.Priority === 'Medium' ? (<YellowArrow />) : (<BlueArrow />)}
// </span>
// <div><CustomAvatar name={item.Assignee} isTable={false} size={16} /></div>
