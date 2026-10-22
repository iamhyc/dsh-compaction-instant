/**
 * 会话事件读取的单一封装（[dsh-patch] 2026-10-22）。
 *
 * eventAt / snapshotEvents / ownEvents 在 @deepseek-ai/dsh-session 0.2.x 已标 @deprecated
 * （2026-09-09 Agent Note：existing logic may remain unmigrated for now, but new calls are
 * prohibited）。官方至今未提供非 deprecated 的全量/随机读取替代口（Session 公开面只有
 * surface / deriveEventMessage / append），foldSurface 也需要事件输入、无法独立替代。
 *
 * 本模块把引擎内全部散读路径收敛为两个转发函数：将来官方给出替代读取口（订阅索引或
 * 快照口）时，只改本文件即可完成整体迁移，引擎各模块不再逐个改动。
 */
export function readEventAt(session, seq) {
  return session.eventAt(seq);
}
export function readSnapshotEvents(session, fromSeq, toSeqExclusive) {
  return session.snapshotEvents(fromSeq, toSeqExclusive);
}
