#!/usr/bin/env python3

from aws_cdk import core

from cdkworkshop.cdkworkshop_stack import CdkworkshopStack
from cdkworkshop.pipeline_stack import WorkshopPipelineStack

app = core.App()
#CdkworkshopStack(app, "cdkworkshop")
WorkshopPipelineStack(app, "WorkshopPipelineStack")

#CdkWorkshopStack(app, "cdkworkshop", env={'region': 'us-west-2'})
app.synth()


