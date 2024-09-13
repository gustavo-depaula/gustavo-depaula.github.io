
During [[An AI Agent is an entity that can observe and act autonomously| AI Agent]] training, there are two classes of actions an agent can take:
- *Exploration*: allows the agent to increase the knowledge about the environment
- *Exploitation*: allows the agent to maximize immediate reward

By exploring, the agent gets a better estimation of the [[Q-function is a value function approximation|value]] of action and by exploiting, the agent might get the reward.
> **Author's note:** Why not only explore, then? 
> I think the answer is that we need to exploit to get further into the challenge.
> Thinking of a beach, if we only explored, we would only stay in the shores, as we never used our acquired knowledge to progress the challenge and be able to explore new stuff.
> But in that way, wouldn't exploitation also be exploratory as well?
> I think the answer is no, because, as we're using our estimates to take the decision, no knowledge of how we could improve the past decision is acquired.
> Exploration identifies doors, exploitations opens a door.

But it cannot do both simulteanously. (exploitation-exploration dillema #newnote)

Thus, to progress, both are needed and a balance between them needs to be choosed.

Epsilon-greedy is a simple approach to the dillema. It chooses randomly between the two options. But the probability of each one changes over time.

Epsilon (**ε**) describes this probability.

In the beggining of the training, there's 100% chance of picking exploration. At the end, there's 100% chance of picking exploitation.

In-between there's a linear progression.

![[epsilon-greedy-image.png]]

In the training of a DQN Agent, the exploration is a random action.

#mlai