module.exports = function({ commit, branch }) {
    const { message } = commit;
    commit.message = `[local] ${message}`;
    return commit;
}