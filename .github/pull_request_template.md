> [!IMPORTANT]  
> Please ensure that you are basing this PR on the `OctopusDeploy/sumologic-azure-function` `octopus` branch and not `master` from the [source Sumo repo](SumoLogic/sumologic-azure-function).

# Background
<!-- Why does this PR exist? Give a non-technical summary so people outside of engineering can have a good summary -->

# Results
## Technical details
<!-- Describe the result of the change including a link to any trello cards / docs. -->


<!-- Consider adding a before/after log excerpt or screen capture. -->

# How to review this PR

<!--
Describe how you want people to review the pull request.
Perhaps you just want an "in principal" review to prove an idea.
Perhaps you want specific people to test the resulting changes.
-->

Quality :heavy_check_mark:
<!-- Describe focus areas (if any): Review tests/ Exploratory testing/ Smoke testing? -->

# Pre-requisites
- [ ] I have referenced this pre-release build of sumo-azure-function in a [CloudPortal branch for E2E tests](https://github.com/OctopusDeploy/CloudPortal/blob/fc28bd00c8a062168d65c91f4f58f4147c09c344/source/CloudPortal.Core/SumoLogic/NsgFlowLogs/Resources/SumoNsgFlowLogsBlobReaderTemplate.json#L365) (All 3 Azure Function Package URLs)
- [ ] I have referenced this pre-release build of sumo-azure-function in a [Dynamic Workers branch for E2E tests](https://github.com/OctopusDeploy/DynamicWorkers/blob/6f824f5e02fd1c38fb616d82761fbabef2be0ed8/source/Cli/SumoLogic/Resources/SumoNsgFlowLogsBlobReaderTemplate.json#L365) (All 3 Azure Function Package URLs)
- [ ] I understand the process for rolling out new Sumo Azure Functions for NSG Flow Logs
- [ ] Are you adding a new dependency?
   - [ ] Ensure the dependency will be detected by Renovate or document it as an [exception in Dependency Management](https://github.com/OctopusDeploy/hosted-docs/blob/master/dependency-management/README.md#dependencies-exempt-from-automatic-updates)
