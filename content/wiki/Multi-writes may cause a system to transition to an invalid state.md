Multi-write is when in one operation there are multiple children "write" operations, with each one of them carrying the possibility of failing individually.

If a transaction T moves the system from A to B, but it itself is made up of sub-transactions ST1, ST2, and ST3, if ST1 succeeds, ST2 fails and ST3 never happens, the system may stay in a invalid state because it expects that in state B, ST{1,2,3} have succeeded.

For example: To transfer money from one account to another, we need to withdrawal from one and deposit in another. The failure to deposit after withdrawal and not reversing the withdrawal operation will put the state in an invalid state, because money has just vanished.

Thus, be careful with multi-writes. But they can be OK if the writes don't leave the system in a invalid/intransient state and can be easily repeated.

#improve