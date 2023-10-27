module.exports = {
    extends: [
        ":dependencyDashboard",
        "group:monorepos",
        "group:recommended"
    ],
    includeForks: true,
    branchPrefixOld: "renovate/",
    branchPrefix: "renovate/",
    platform: "github",
    repositories: ["OctopusDeploy/sumologic-azure-function"],
    timezone: "Australia/Brisbane",
    onboarding: false,
    requireConfig: "optional",
    prConcurrentLimit: 3,
    prHourlyLimit: 1,
    prCommitsPerRunLimit: 3,
    // null dryRun will create PRs and full dryRun will not
    // if branch is protected then it's main and hence dryRun should be null
    dryRun: process.env.RENOVATE_CLOUD_PLATFORM_PROTECTED_BRANCH === "true" ? null : "full",
    stabilityDays: 14,
    internalChecksFilter: "strict", //Don't create PRs until version is older than stabilityDays
    ignorePaths: [
        "**/node_modules/**",
        "**/test/**",
        "**/tests/**",
    ],
    packageRules: [
        {
            matchPackageNames: [
                "renovatebot/github-action"
            ],
            schedule: [
                "* 0-3 1,14 * *"
            ]
        }
    ]
};
