
Given a state `s`, the action policy returns an action `a`:
$$
\pi(s) = a
$$

An *optimal policy* returns the action that maximizes the reward/value that can be achieved in that state. In other words, an optimal policy chooses the highest value action, according to the [[Bellman Equation express a value function|Bellman Equation]]

Reward or value may come in the future, thus an optimal policy maximizes the reward/value over a sequence of states and actions. Another way to think about this is that the next action should unlock the maximum potential rewards in the future.

Resources:
- See "Policy function" https://scholar.harvard.edu/files/basilico/files/laibson_notes_2013_0.pdf

#cs #econ 