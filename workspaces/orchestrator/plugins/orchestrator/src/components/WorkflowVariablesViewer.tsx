import React from 'react';
import ReactJson from 'react-json-view';

import { useTheme } from '@mui/material/styles';

import { ProcessInstanceVariables } from '@backstage-community/plugin-orchestrator-common';

import { Paragraph } from './Paragraph';

interface ProcessVariablesViewerProps {
  variables?: ProcessInstanceVariables;
  emptyState?: React.ReactNode;
}

export const WorkflowVariablesViewer: React.FC<ProcessVariablesViewerProps> = ({
  variables = {},
  emptyState = <Paragraph>No data available</Paragraph>,
}) => {
  const theme = useTheme();

  return !variables ? (
    <>{emptyState}</>
  ) : (
    <ReactJson
      src={variables}
      name={false}
      theme={theme.palette.mode === 'dark' ? 'monokai' : 'rjv-default'}
    />
  );
};
WorkflowVariablesViewer.displayName = 'WorkflowVariablesViewer';
