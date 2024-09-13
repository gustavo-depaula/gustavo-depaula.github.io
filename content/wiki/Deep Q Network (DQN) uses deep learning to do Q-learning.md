
DQN is a variant of [[Q-learning is the process of finding the best possible Q-function|Q-learning]] done by DeepMind to train an AI to play Atari games.

An [[An AI Agent is an entity that can observe and act autonomously|agent]] in the DQN Architecture:
- makes observations of what is happening in the game
- knows about states and rewards
- acts in the game by taking actions

The DQN agent in training has:
- a [[Replay Buffer register what is happening|replay buffer]]
- a Q-function [[DQN training doesn't rely on expected outputs|that is trained]].

During training, [[Epsilon-greedy dictates the action of the agent during training]].

Resources:
- Paper: https://arxiv.org/abs/1312.5602

#mlai #cs 