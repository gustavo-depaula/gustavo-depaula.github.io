
In [[Deep Q Network (DQN) uses deep learning to do Q-learning|DQN]], the agent has a "Replay Buffer". The *Replay Buffer* is an event log of what happened in the game.

Each line of the buffer contains these informations: `s,a,s',r,d`
- Current state
- Action taken
- Next state
- Immediate reward
- Done: a boolean that indicates if the game has finished


#mlai